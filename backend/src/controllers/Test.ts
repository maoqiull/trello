import { Controller, Ctx, Get, Params, Flow } from "koa-ts-controllers";
import { Context } from "koa";
import authorization from "../middlewares/authorization";

@Controller("/test")
class TestController {
  @Get("/hello")
  async hello() {
    return "Hello Test!";
  }

  @Get("/user/:id(\\d+)")
  async getUser(@Params("id") id: number) {
    return "当前params中的用户id是：" + id;
  }

  @Get("/auth")
  @Flow([authorization])
  async auth(@Ctx() ctx: Context) {
    return "不登录看不到";
  }

  @Get("/noAuth")
  async noAuth() {
    return "随便看";
  }
}
