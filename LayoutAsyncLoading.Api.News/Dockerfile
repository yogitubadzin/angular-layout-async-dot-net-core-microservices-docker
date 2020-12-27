FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["LayoutAsyncLoading.Api.News.csproj", "LayoutAsyncLoading.Api.News/"]
RUN dotnet restore "LayoutAsyncLoading.Api.News/LayoutAsyncLoading.Api.News.csproj"

WORKDIR "/src/LayoutAsyncLoading.Api.News"
COPY . .

RUN dotnet build "LayoutAsyncLoading.Api.News.csproj" -c Release -o /app/build

FROM build AS publish       
RUN dotnet publish "LayoutAsyncLoading.Api.News.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "/app/LayoutAsyncLoading.Api.News.dll", "--server.urls", "https://0.0.0.0:443"]