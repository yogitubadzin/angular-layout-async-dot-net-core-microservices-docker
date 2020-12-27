FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["LayoutAsyncLoading.Api.Text.csproj", "LayoutAsyncLoading.Api.Text/"]
RUN dotnet restore "LayoutAsyncLoading.Api.Text/LayoutAsyncLoading.Api.Text.csproj"

WORKDIR "/src/LayoutAsyncLoading.Api.Text"
COPY . .

RUN dotnet build "LayoutAsyncLoading.Api.Text.csproj" -c Release -o /app/build

FROM build AS publish       
RUN dotnet publish "LayoutAsyncLoading.Api.Text.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "/app/LayoutAsyncLoading.Api.Text.dll", "--server.urls", "https://0.0.0.0:443"]