from typing import Optional
from fastapi import  FastAPI, Response
from fastapi.params import Body
from pydantic import BaseModel
from random import randrange
from app import get_model ,get_route

app = FastAPI()


class Post(BaseModel):
    title:str
    content:str
    published:bool = True
    rating: Optional[int] = None

my_posts =[{"title":"title of post 1", "content":"content of post 1", "id":1}, {"title":"title of post 2", "content":"content of post 2", "id":2},]


def find_post(id):
    for p in my_posts:
        if p["id"] == id:
            return p

@app.get("/posts")
def get_posts():
    return{ "data" : my_posts }

@app.post("/posts")
async def create_posts(post:Post):
    post_dict = post.dict()
    post_dict['id'] = randrange(0,100000)
    my_posts.append(post_dict)
    return {"data":post_dict}

@app.get("/posts/{id}")
def get_post(id:int , response:Response):
    print(type(id))
    post = find_post(id)
    if not post:
        response.status_code = 404
    return {"post_details": post}


print(get_model())

