﻿FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
WORKDIR /src
COPY ["LayoutAsyncLoading.Client.csproj", "LayoutAsyncLoading.Client/"]
RUN dotnet restore "LayoutAsyncLoading.Client/LayoutAsyncLoading.Client.csproj"

WORKDIR "/src/LayoutAsyncLoading.Client"
COPY . .

RUN dotnet build "LayoutAsyncLoading.Client.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "LayoutAsyncLoading.Client.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LayoutAsyncLoading.Client.dll"]