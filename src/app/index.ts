import path from "path";
import express, { Request, Response } from "express";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const isDev = process.env.IS_OFFLINE === "true";
const distDir = path.resolve("dist");
const appRouter = express.Router();

const s3Client = new S3Client({ region: "ap-northeast-1" });
const Bucket = "aws-lambda-test-sj";
const index = "index.html";

const getIndexFile = async () => {
  const cmd = new GetObjectCommand({ Bucket, Key: index });
  const { ContentType, Body } = await s3Client.send(cmd);
  if (!ContentType || !Body)
    throw new Error("Error retrieving index.html from S3");
  return { ContentType, Body };
};

const getS3Data = async (file: string) => {
  try {
    if (!file || file === "/") return await getIndexFile();
    const cmd = new GetObjectCommand({ Bucket, Key: file });
    const { ContentType, Body } = await s3Client.send(cmd);
    if (!ContentType || !Body) return await getIndexFile();
    return { ContentType, Body };
  } catch (error) {
    return await getIndexFile();
  }
};

const devCallback = (req: Request, res: Response) => {
  const index = `${distDir}/index.html`;
  res.sendFile(index);
};

const prodCallback = async (req: Request, res: Response) => {
  try {
    const file = req.path.slice(1);
    const { ContentType, Body } = await getS3Data(file);
    const buffer = Buffer.from(await Body.transformToByteArray());
    return res.contentType(ContentType).send(buffer);
  } catch (err) {
    console.error("Error retrieving data from S3:", err);
  }
};

if (isDev) appRouter.use(express.static(distDir));
appRouter.get("/*", isDev ? devCallback : prodCallback);

export default appRouter;
