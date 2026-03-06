# Lesson 04: Create（追加）
# docs/04-create.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] Hero インスタンスを3件作る
#   [ ] Session を使って session.add() でDBに追加する
#   [ ] session.commit() で確定させる
#   [ ] session.refresh(hero) で id が振られていることを確認する
#   [ ] 追加後に hero.id と hero.name を print() する

from sqlmodel import SQLModel, Field, create_engine, Session
from typing import Optional

DATABASE_URL = "sqlite:///lesson04.db"


class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: Optional[int] = None


engine = create_engine(DATABASE_URL)


def create_db():
    SQLModel.metadata.create_all(engine)


def run():
    print("=== Lesson 04: Create（追加） ===")
    create_db()

    # ここで Hero を3件作って Session で追加する
    # with Session(engine) as session:
    #     hero = Hero(...)
    #     session.add(hero)
    #     session.commit()
    #     session.refresh(hero)
    #     print(hero.id, hero.name)


if __name__ == "__main__":
    run()
