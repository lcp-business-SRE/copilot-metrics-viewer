// scripts/fetch-github-data.js
// このスクリプトはNode.jsで実行されることを想定
import { writeFileSync } from 'fs';
import { resolve } from 'path';

async function fetchGitHubData() {
  const githubToken = process.env.NUXT_GITHUB_TOKEN; // GitHub Actionsから渡される環境変数

  if (!githubToken) {
    console.error('NUXT_GITHUB_TOKEN is not set.');
    process.exit(1);
  }

  try {
    const response = await fetch('https://api.github.com/user', { // 例: ユーザー情報を取得
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    const data = await response.json();

    // 取得したデータをJSONファイルとして保存
    const outputPath = resolve(process.cwd(), 'public', 'github_data.json'); // Nuxtのpublicディレクトリなど
    writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`GitHub data saved to ${outputPath}`);

  } catch (error) {
    console.error('Failed to fetch GitHub data:', error);
    process.exit(1);
  }
}

fetchGitHubData();