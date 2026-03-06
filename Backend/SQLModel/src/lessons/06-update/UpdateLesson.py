# Lesson 06: Update（更新）
# docs/06-update.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] session.get() で更新したいレコードを取得する
#   [ ] 属性を直接書き換える（hero.age = 30 など）
#   [ ] session.add() して session.commit() で確定する
#   [ ] session.refresh() で最新の値を取得して確認する

from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Optional

DATABASE_URL = "sqlite:///lesson06.db"


class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: Optional[int] = None


engine = create_engine(DATABASE_URL)


def create_db_with_data():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        hero = Hero(name="Spider-Boy", secret_name="Pedro Parqueador")
        session.add(hero)
        session.commit()


def run():
    print("=== Lesson 06: Update（更新） ===")
    create_db_with_data()

    with Session(engine) as session:
        # ① id=1 のレコードを取得する

        # ② age を 16 に更新する

        # ③ 更新内容をコミットして結果を表示する
        pass


if __name__ == "__main__":
    run()
