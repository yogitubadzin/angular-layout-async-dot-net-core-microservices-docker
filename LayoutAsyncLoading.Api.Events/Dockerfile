﻿FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["LayoutAsyncLoading.Api.Events.csproj", "LayoutAsyncLoading.Api.Events/"]
RUN dotnet restore "LayoutAsyncLoading.Api.Events/LayoutAsyncLoading.Api.Events.csproj"

WORKDIR "/src/LayoutAsyncLoading.Api.Events"
COPY . .

RUN dotnet build "LayoutAsyncLoading.Api.Events.csproj" -c Release -o /app/build

FROM build AS publish       
RUN dotnet publish "LayoutAsyncLoading.Api.Events.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "/app/LayoutAsyncLoading.Api.Events.dll", "--server.urls", "https://0.0.0.0:443"]