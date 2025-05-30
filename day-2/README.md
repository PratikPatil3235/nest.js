# NestJS Concepts Overview

This repository demonstrates key features of NestJS, including Middleware, Pipes, Exception Filters, and Guards with examples of custom and built-in implementations.

---

## 🚀 Middleware

### Built-in Usage

NestJS allows the use of middleware for request lifecycle control.

```ts
app.use(loggerMiddleware);

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.url}`);
  next();
}

```
## 🧪 Pipes

### Built-in Pipes

- ParseIntPipe

- ValidationPipe

- ParseBoolPipe

- DefaultValuePipe

- ParseArrayPipe


### Custom Pipe

```

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('Invalid input');
    }
    return value;
  }
}

/// usage

@Post()
create(@Body(new CustomPipe()) dto: BookDto) { ... }

```
## ❌ Exceptions

-Throw errors using:

```

throw new BadRequestException('Invalid data');

```

### Built-in HTTP exceptions include:

- BadRequestException

- UnauthorizedException

- NotFoundException

- ForbiddenException

- InternalServerErrorException

  ## 🛡 Exception Filters

  ## Custom Exception Filter

```

  @Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}


```


### Usage:

- Global: app.useGlobalFilters(new CustomExceptionFilter());

- Controller: @UseFilters(CustomExceptionFilter)

## 🛡 Guards

Guards determine whether a request is allowed to proceed.

### Route-Level Guard

```

@Get()
@UseGuards(AuthGuard)
find() { ... }

```
### Controller-Level Guard

```

@UseGuards(RoleGuard)
@Controller('book')
export class BookController { ... }


```

### Global Guard

```

app.useGlobalGuards(new RoleGuard());


```

### Custom Guard


## 📌 Running the Project

```
npm install
npm run start:dev

```

## ✅ API Endpoints Sample

- GET /book/find → Get all books

- POST /book/addBook → Add new book (uses ValidationPipe)

- GET /book/:id → Find book by ID (uses ParseIntPipe)

- GET /book/redirect → Redirect to YouTube

- GET /book → Throws a BadRequestException



