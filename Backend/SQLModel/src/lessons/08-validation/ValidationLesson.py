# Lesson 08: バリデーション
# docs/08-validation.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] age に ge=0, le=150 の制約を付ける
#   [ ] name に min_length=1 の制約を付ける
#   [ ] 制約に違反するインスタンスを作ってエラーを確認する
#   [ ] ValidationError をキャッチして内容を表示する

from sqlmodel import SQLModel, Field
from typing import Optional
from pydantic import ValidationError


# ここにバリデーション付きモデルを定義する
# class Hero(SQLModel):  ← table=True なしでOK（DBなしで型チェックだけ試す）
#     name: str = Field(min_length=...)
#     age: Optional[int] = Field(default=None, ge=..., le=...)


def run():
    print("=== Lesson 08: バリデーション ===")

    # ① 正常なインスタンスを作る

    # ② 不正な値（age=-1 など）で作ってみて ValidationError を確認する
    # try:
    #     ...
    # except ValidationError as e:
    #     print(e)


if __name__ == "__main__":
    run()
