# 图片存储仓库

### 实现方法

通过利用 Octokit 来实现将 github 仓库作为一个图床

```javascript
/**
 * 上传图片文件到github远程仓库
 * @param file 上传的图片文件
 * @param path 上传对应仓库下的文件路径 image/user/a.png
 * @returns
 */
const handleUpload = async (file: any, path: any) => {
  if (!file) {
    console.error("Please select a file");
    return;
  }
  // 文件路径处理
  try {
    const octokit = new Octokit({
      auth: gbPersonalAccessTokens, // 替换为你的 GitHub 个人访问令牌
    });
    // 读取文件内容
    const content = await readFileAsBase64(file);
    // 替换为你的 GitHub 仓库信息和上传路径
    const owner = gbOwner; // 替换为目标仓库的所有者（用户或组织名）
    const repo = gbRepo; // 替换为目标仓库的名称
    const branch = "master"; // 或你的仓库的默认分支
    // 使用 Octokit 上传文件
    const response = await octokit.request(
      `PUT /repos/${owner}/${repo}/contents/${path}`,
      {
        message: "Add user photo",
        content,
        branch,
      }
    );
    console.log("File uploaded:", response);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
```
