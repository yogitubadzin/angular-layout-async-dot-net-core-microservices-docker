FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["LayoutAsyncLoading.Api.About.csproj", "LayoutAsyncLoading.Api.About/"]
RUN dotnet restore "LayoutAsyncLoading.Api.About/LayoutAsyncLoading.Api.About.csproj"

WORKDIR "/src/LayoutAsyncLoading.Api.About"
COPY . .

RUN dotnet build "LayoutAsyncLoading.Api.About.csproj" -c Release -o /app/build

FROM build AS publish       
RUN dotnet publish "LayoutAsyncLoading.Api.About.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "/app/LayoutAsyncLoading.Api.About.dll", "--server.urls", "https://0.0.0.0:443"]