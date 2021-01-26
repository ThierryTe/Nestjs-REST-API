import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
//Configuration du swagger
  const swaggerConfig = new DocumentBuilder()
  .setTitle('API de création de jobs')
  .setDescription("Permet la création d'un job")
  .setVersion('0.1')
  .build()
 const doc = SwaggerModule.createDocument(app, swaggerConfig);
 SwaggerModule.setup('api', app, doc);
//fin configuration du swagger

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  //app.setViewEngine('pug');
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
