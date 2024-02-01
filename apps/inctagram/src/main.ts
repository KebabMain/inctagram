import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appSettings } from './app.settings';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appSettings(app);
  const config = new DocumentBuilder()
    .setTitle('Inctagram')
    .setDescription('The Inctagram API description from Kebab team')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
