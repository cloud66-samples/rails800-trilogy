// load all stimulus controllers
import { application } from "./application"

// eager-load all controllers defined in this directory
import HelloController from "./hello_controller"
application.register("hello", HelloController)
