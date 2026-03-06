# Lesson 07: Delete（削除）
# docs/07-delete.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] session.get() で削除したいレコードを取得する
#   [ ] session.delete(hero) で削除する
#   [ ] session.commit() で確定する
#   [ ] 削除後に同じ id で取得して None になることを確認する

from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Optional

DATABASE_URL = "sqlite:///lesson07.db"


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
        ]
        for h in heroes:
            session.add(h)
        session.commit()


def run():
    print("=== Lesson 07: Delete（削除） ===")
    create_db_with_data()

    with Session(engine) as session:
        # ① 削除前に全件表示する

        # ② id=1 のレコードを削除する

        # ③ 削除後に全件表示して減っていることを確認する
        pass


if __name__ == "__main__":
    run()
