# Lesson 09: リレーション
# docs/09-relations.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] Team モデルを定義する（id, name）
#   [ ] Hero モデルに team_id: Optional[int] = Field(foreign_key="team.id") を追加する
#   [ ] Hero に team: Optional[Team] = Relationship() を追加する
#   [ ] Team と Hero を作って関連付けて保存する
#   [ ] hero.team でチーム名にアクセスできることを確認する

from sqlmodel import SQLModel, Field, create_engine, Session, Relationship
from typing import Optional, List

DATABASE_URL = "sqlite:///lesson09.db"


# ここに Team モデルを定義する
# class Team(SQLModel, table=True):
#     ...


# ここに Hero モデルを定義する（team_id と Relationship を含む）
# class Hero(SQLModel, table=True):
#     ...


engine = create_engine(DATABASE_URL)


def run():
    print("=== Lesson 09: リレーション ===")
    SQLModel.metadata.create_all(engine)

    with Session(engine) as session:
        # ① Team を作る

        # ② Hero を作って team と関連付ける

        # ③ hero.team.name にアクセスして表示する
        pass


if __name__ == "__main__":
    run()
