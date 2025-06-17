# GtiHub Copilot の利用状況の確認

## GitHub Copilot Metrics Viewer

GitHub Copilotの利用状況を確認するためのツールです。

このツールを使用することで、GitHub Copilotの利用状況を可視化し、分析することができます。
これにより、チームや個人の生産性向上に役立てることができます。

GitHub OrganizationまたはEnterprise Accountの GitHub Copilot に関連する様々なメトリクスをグラフ形式で表示します。これらの可視化は、データを明確に表現するように設計されており、GitHub Copilot の影響と導入状況を容易に理解・分析できます。このアプリケーションは、[GitHub Copilot Metrics API](https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-metrics?apiVersion=2022-11-28)を利用しています。

## 機能

- Copilotの利用状況のグラフ表示
- 利用時間の集計
- 利用頻度の分析
- チームメンバーごとの利用状況の比較
    - チームメンバーごとの利用時間の比較
    - チームメンバーごとの利用頻度の比較
- 利用状況のエクスポート機能
  - CSV形式でのエクスポート
  - JSON形式でのエクスポート

## ローカルサーバ構築

```bash
# 必要なパッケージのインストール
npm install
# ローカルサーバの起動
npm run dev
```
