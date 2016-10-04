import { ExpressApplication } from "protontype";
import { TasksRouter } from "./routes/TasksRouter";
import { UsersRouter } from "./routes/UsersRouter";
import { DefaultRouter } from "./routes/DefaultRouter";
import { JWTAuthMiddleware } from "./middlewares/JWTAuthMiddleware";
/**
 * @author Humberto Machado
 *
 */
let expressApp = new ExpressApplication();
expressApp
    .withAuthMiddleware(new JWTAuthMiddleware())
    .addRouter(new DefaultRouter())
    .addRouter(new TasksRouter())
    .addRouter(new UsersRouter())
    .bootstrap();
