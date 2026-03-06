# Lesson 05: Read（取得）
# docs/05-read.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] session.get(Hero, id) で1件取得する
#   [ ] select(Hero) + session.exec().all() で全件取得する
#   [ ] select(Hero).where(Hero.name == "...") で条件検索する
#   [ ] 取得できなかった場合（None）の確認をする

from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Optional

DATABASE_URL = "sqlite:///lesson05.db"


class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: Optional[int] = None


engine = create_engine(DATABASE_URL)


def create_db_with_data():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        heroes = [
            Hero(name="Deadpond",   secret_name="Dive Wilson"),
            Hero(name="Spider-Boy", secret_name="Pedro Parqueador"),
            Hero(name="Rusty-Man",  secret_name="Tommy Sharp", age=48),
        ]
        for h in heroes:
            session.add(h)
        session.commit()


def run():
    print("=== Lesson 05: Read（取得） ===")
    create_db_with_data()

    with Session(engine) as session:
        # ① id=1 を取得する（session.get を使う）

        # ② 全件取得する（select + exec + all を使う）

        # ③ 条件付きで取得する（.where() を使う）
        pass


if __name__ == "__main__":
    run()
