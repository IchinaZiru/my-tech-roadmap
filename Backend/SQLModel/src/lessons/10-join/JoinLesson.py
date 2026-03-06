# Lesson 10: JOIN クエリ
# docs/10-join.md を読んで実装する
#
# 実装チェックリスト:
#   [ ] select(Hero, Team).join(Team) で Hero と Team を結合して取得する
#   [ ] exec().all() で (hero, team) のタプルとして受け取る
#   [ ] hero.name と team.name を一緒に表示する
#   [ ] where() と組み合わせて特定チームのヒーローだけ絞り込む

from sqlmodel import SQLModel, Field, create_engine, Session, Relationship, select
from typing import Optional, List

DATABASE_URL = "sqlite:///lesson10.db"


class Team(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    headquarters: str
    heroes: List["Hero"] = Relationship(back_populates="team")


class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: Optional[int] = None
    team_id: Optional[int] = Field(default=None, foreign_key="team.id")
    team: Optional[Team] = Relationship(back_populates="heroes")


engine = create_engine(DATABASE_URL)


def create_db_with_data():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        team_z = Team(name="Z-Force",    headquarters="Sister Margaret's Bar")
        team_p = Team(name="Preventers", headquarters="Sharp Tower")
        session.add(team_z)
        session.add(team_p)
        session.commit()
        session.refresh(team_z)
        session.refresh(team_p)

        heroes = [
            Hero(name="Deadpond",   secret_name="Dive Wilson",        team_id=team_z.id),
            Hero(name="Spider-Boy", secret_name="Pedro Parqueador",   team_id=team_p.id),
            Hero(name="Rusty-Man",  secret_name="Tommy Sharp", age=48, team_id=team_p.id),
        ]
        for h in heroes:
            session.add(h)
        session.commit()


def run():
    print("=== Lesson 10: JOIN クエリ ===")
    create_db_with_data()

    with Session(engine) as session:
        # ① Hero と Team を JOIN して全件取得する
        # statement = select(Hero, Team).join(Team)
        # results = session.exec(statement).all()
        # for hero, team in results:
        #     print(...)

        # ② "Preventers" チームのヒーローだけ絞り込む
        pass


if __name__ == "__main__":
    run()
