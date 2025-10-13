from ninja import NinjaAPI

api = NinjaAPI()


@api.get("/hello")
def hello(request):
    # FIXME: エラー処理必要
    return {"result": "Hello, World!"}
