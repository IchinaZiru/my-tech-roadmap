# Lesson 01: Hello SQLModel
# docs/01-hello-sqlmodel.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] SQLModel をインポートする
#   [ ] Hero クラスを定義する（id, name, age フィールド）
#   [ ] Hero のインスタンスを作って print() で内容を確認する
#   [ ] モデルを辞書に変換して print() する（.model_dump()）

from sqlmodel import SQLModel, Field
from typing import Optional


# ここにモデルを定義する
# class Hero(...):
#     ...


def run():
    print("=== Lesson 01: Hello SQLModel ===")

    # ここに Hero インスタンスを作って表示する


if __name__ == "__main__":
    run()
