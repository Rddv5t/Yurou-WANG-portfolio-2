# 王语柔个人作品集网站

这是适合直接上传到 GitHub、再由 Vercel 部署的源码包。网站使用 Next.js，包含中英双语、响应式布局、项目详情页、滚动动效、高清 WebP 项目图片，以及作品集 PDF 下载。

## 文件夹里有什么

- `app/`：首页、项目详情页和网站样式
- `components/`：导航、语言切换和滚动动效
- `lib/projects.ts`：项目名称、说明、年份、图片顺序等数据
- `public/`：项目图片、个人照片、图标和可下载 PDF
- `package.json`：安装与构建命令
- `next.config.ts`：Vercel/静态网站构建设置

## 最简单的部署方法：GitHub + Vercel

### 第一步：把源码放到 GitHub

1. 解压本 ZIP，得到文件夹 `Wang-Yurou-Portfolio-Vercel`。
2. 注册或登录 [GitHub](https://github.com/)。
3. 点右上角 `+`，选择 `New repository`。
4. Repository name 填 `wang-yurou-portfolio`。
5. 选择 `Public` 或 `Private` 都可以，然后点 `Create repository`。
6. 在新仓库页面点 `uploading an existing file`。
7. 打开解压后的文件夹，全选里面的文件和文件夹并拖进网页。不要只上传最外层文件夹，也不要上传 ZIP。
8. 等待所有文件上传完成，在页面底部点 `Commit changes`。

提示：项目图片数量较多。如果 GitHub 网页一次上传失败，建议安装 [GitHub Desktop](https://desktop.github.com/)，选择 `Add an Existing Repository from your Hard Drive`，再点 `Publish repository`。

### 第二步：用 Vercel 发布

1. 注册或登录 [Vercel](https://vercel.com/)，推荐选择 `Continue with GitHub`。
2. 在 Vercel 首页点 `Add New...` → `Project`。
3. 找到 `wang-yurou-portfolio`，点 `Import`。
4. Framework Preset 应自动显示 `Next.js`。
5. Build Command、Output Directory、Environment Variables 全部保持默认，不用填写。
6. 点 `Deploy`，等待构建完成。
7. 出现庆祝页面后，点预览图或 `Visit`，即可打开公开网站。

以后修改网站时，只要把改动提交到 GitHub，Vercel 会自动重新部署，不需要重复建立项目。

## 绑定阿里云域名

1. 在 Vercel 项目中进入 `Settings` → `Domains`。
2. 输入你的域名，例如 `www.your-domain.com`，点 `Add`。
3. Vercel 会显示一条需要添加的 DNS 记录。保持该页面打开。
4. 登录阿里云，进入 `云解析 DNS` → 找到域名 → `解析设置` → `添加记录`。
5. 如果绑定 `www`：记录类型通常选 `CNAME`，主机记录填 `www`，记录值严格复制 Vercel 显示的值。
6. 如果绑定根域名（不带 `www`）：按 Vercel 页面当时显示的记录类型和值填写，不要凭记忆填写旧地址。
7. 保存后等待解析生效，通常几分钟到数小时。回到 Vercel 的 Domains 页面，显示绿色对勾即成功。

建议把 `www` 设为主域名，同时把根域名重定向到 `www`。域名在中国大陆能否稳定访问还受网络、DNS 和 Vercel 节点状况影响；如果以后需要备案和更稳定的中国大陆访问，可迁移到阿里云 OSS/ESA 等已备案方案。本项目已配置为纯静态导出，迁移时不需要重写页面。

## 在自己电脑预览（可选）

需要先安装 Node.js 22 或更高版本。进入项目文件夹后运行：

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。结束预览时，在终端按 `Ctrl + C`。

正式构建检查：

```bash
npm run build
```

构建成功后，静态成品会生成在 `out/` 文件夹。`out/` 是自动生成内容，不需要提交到 GitHub。

## 常用修改位置

- 修改项目文案、年份、顺序：`lib/projects.ts`
- 修改首页/关于/经历/联系方式：`app/page.tsx`
- 修改整体颜色、字号、排版、动效：`app/globals.css`
- 替换项目图片：`public/projects/pages/`
- 替换个人照片：`public/profile/yurou-wang.webp`
- 替换下载文件：`public/downloads/Wang-Yurou-Portfolio.pdf`

替换图片时尽量保持原文件名；项目大图建议继续使用相同比例的 WebP，以保证排版整齐和加载速度。

## 隐私提醒

网站源码包含公开展示的邮箱和手机号。GitHub 仓库如果设为 Public，任何人都可以看到源码。若不希望源码公开，请把 GitHub 仓库设为 Private；Vercel 仍然可以从私有仓库部署公开网站。
