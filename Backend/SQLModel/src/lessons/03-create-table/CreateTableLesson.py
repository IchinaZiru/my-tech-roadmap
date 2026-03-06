# Lesson 03: テーブル作成
# docs/03-create-table.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] table=True を付けた Hero モデルを定義する
#   [ ] create_engine() で SQLite エンジンを作る
#   [ ] SQLModel.metadata.create_all(engine) でテーブルを作成する
#   [ ] lesson03.db ファイルが生成されることを確認する

from sqlmodel import SQLModel, Field, create_engine
from typing import Optional


# ここに table=True を付けたモデルを定義する
# class Hero(SQLModel, table=True):
#     ...


# ここにエンジンを作る
# engine = create_engine(...)


def run():
    print("=== Lesson 03: テーブル作成 ===")

    # ここで create_all を呼んでテーブルを作る

    print("テーブルを作成しました。lesson03.db を確認してください。")


if __name__ == "__main__":
    run()
