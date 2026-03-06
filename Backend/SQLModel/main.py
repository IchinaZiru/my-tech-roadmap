# SQLModel 学習コース — ナビゲーター
# 使い方: python main.py

import importlib.util
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent

LESSONS = [
    {"label": "01 Hello SQLModel", "path": "src/lessons/01-hello-sqlmodel/HelloSQLModelLesson.py"},
    {"label": "02 フィールド型",      "path": "src/lessons/02-fields/FieldsLesson.py"},
    {"label": "03 テーブル作成",      "path": "src/lessons/03-create-table/CreateTableLesson.py"},
    {"label": "04 Create（追加）",   "path": "src/lessons/04-create/CreateLesson.py"},
    {"label": "05 Read（取得）",     "path": "src/lessons/05-read/ReadLesson.py"},
    {"label": "06 Update（更新）",   "path": "src/lessons/06-update/UpdateLesson.py"},
    {"label": "07 Delete（削除）",   "path": "src/lessons/07-delete/DeleteLesson.py"},
    {"label": "08 バリデーション",    "path": "src/lessons/08-validation/ValidationLesson.py"},
    {"label": "09 リレーション",      "path": "src/lessons/09-relations/RelationsLesson.py"},
    {"label": "10 JOIN クエリ",      "path": "src/lessons/10-join/JoinLesson.py"},
]


def print_menu():
    print("\n" + "=" * 40)
    print("  SQLModel 学習コース")
    print("=" * 40)
    for i, lesson in enumerate(LESSONS, 1):
        print(f"  {i:2}. {lesson['label']}")
    print("   0. 終了")
    print("=" * 40)


def run_lesson(index: int):
    lesson = LESSONS[index]
    file_path = BASE_DIR / lesson["path"]
    print(f"\n--- {lesson['label']} を実行します ---\n")

    if not file_path.exists():
        print("（このレッスンはまだ実装されていません）")
        return

    spec = importlib.util.spec_from_file_location("lesson", file_path)
    mod = importlib.util.module_from_spec(spec)
    try:
        spec.loader.exec_module(mod)
        if hasattr(mod, "run"):
            mod.run()
        else:
            print("（run() 関数が定義されていません）")
    except Exception as e:
        print(f"エラーが発生しました: {e}")


def main():
    while True:
        print_menu()
        raw = input("レッスン番号を入力してください > ").strip()
        if raw == "0":
            print("終了します。")
            break
        if not raw.isdigit():
            print("数字を入力してください。")
            continue
        num = int(raw)
        if num < 1 or num > len(LESSONS):
            print(f"1〜{len(LESSONS)} の番号を入力してください。")
            continue
        run_lesson(num - 1)


if __name__ == "__main__":
    main()
