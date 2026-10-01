# Portfolio CMS

CMS y panel de administración para el portfolio de arquitectura.

Este proyecto está desarrollado con [Payload CMS](https://payloadcms.com/) y se encarga de gestionar los contenidos del portfolio, principalmente proyectos, imágenes y usuarios.

El sitio público del portfolio está desarrollado en Astro y consume la información de este CMS mediante su API.

## Repositorios

* **CMS:** este repositorio
- **Portfolio:** [Portfolio en Astro](https://github.com/Fabrizio9898/PortfolioForClient-aruitecture-)

## Tecnologías

* Payload CMS
* Next.js
* MongoDB
* TypeScript
* React

## Requisitos

* Node.js 20+
* pnpm
* MongoDB

## Instalación

Cloná el repositorio e instalá las dependencias:

```bash
git clone git@github.com:Fabrizio9898/PaylaodCMSforArquitecturePortfolio.git
cd PaylaodCMSforArquitecturePortfolio
pnpm install
```

Copiá las variables de entorno:

```bash
cp .env.example .env
```

Configurá las variables necesarias en `.env`, principalmente la conexión a MongoDB.

## Desarrollo

Para iniciar el proyecto en modo desarrollo:

```bash
pnpm dev
```

El panel de administración estará disponible en:

```text
http://localhost:3000/admin
```

La primera vez que ingreses, Payload te permitirá crear el usuario administrador.

## Contenido

El CMS permite administrar el contenido del portfolio desde el panel de Payload.

### Projects

Colección utilizada para gestionar los proyectos del portfolio.

Desde el panel se pueden crear, editar y publicar proyectos.

### Media

Colección utilizada para gestionar imágenes y archivos utilizados por los proyectos.

### Users

Usuarios que tienen acceso al panel de administración.

## Publicación

Los proyectos pueden guardarse como borradores y publicarse desde el panel.

Una vez publicados, el portfolio en Astro consume los datos desde la API de Payload.

```text
┌──────────────┐
│ Payload CMS  │
│              │
│  Projects    │
│  Media       │
│  Users       │
└──────┬───────┘
       │
       │ API
       ↓
┌──────────────┐
│ Astro        │
│ Portfolio    │
└──────────────┘
```

## Estructura general

```text
CMS (Payload)
├── Projects
├── Media
└── Users

Portfolio (Astro)
└── Consume la API del CMS
```

## Producción

Antes de desplegar el proyecto en producción:

1. Configurar las variables de entorno.
2. Configurar la base de datos de producción.
3. Configurar el almacenamiento de imágenes/media.
4. Crear el usuario administrador.
5. Configurar la URL del CMS utilizada por el portfolio de Astro.

## Próximas integraciones

El CMS está preparado para incorporar nuevas funcionalidades, entre ellas:

* Importación de proyectos desde Google Drive.
* Generación de borradores mediante IA.
* Revisión y publicación de proyectos desde el panel.
* Personalización del dashboard de administración.

## Recursos

* [Documentación de Payload](https://payloadcms.com/docs)
* [Repositorio oficial de Payload](https://github.com/payloadcms/payload)
* [Portfolio en Astro](URL_DEL_REPO_ASTRO)

## Licencia

Proyecto privado.
