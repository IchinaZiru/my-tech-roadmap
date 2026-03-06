# Lesson 02: フィールド型
# docs/02-fields.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] id: Optional[int] = Field(default=None, primary_key=True) を定義する
#   [ ] name: str（必須フィールド）を定義する
#   [ ] age: Optional[int] = None（任意フィールド）を定義する
#   [ ] secret_name: str = Field(index=True) を定義する
#   [ ] インスタンスを作って各フィールドの値を確認する

from sqlmodel import SQLModel, Field
from typing import Optional


# ここにフィールドを詳細に定義したモデルを作る
# class Hero(...):
#     id: ...
#     name: ...
#     age: ...
#     secret_name: ...


def run():
    print("=== Lesson 02: フィールド型 ===")

    # ここにインスタンスを作って各フィールドを確認する


if __name__ == "__main__":
    run()
