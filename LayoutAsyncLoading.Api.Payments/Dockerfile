FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["LayoutAsyncLoading.Api.Payments.csproj", "LayoutAsyncLoading.Api.Payments/"]
RUN dotnet restore "LayoutAsyncLoading.Api.Payments/LayoutAsyncLoading.Api.Payments.csproj"

WORKDIR "/src/LayoutAsyncLoading.Api.Payments"
COPY . .

RUN dotnet build "LayoutAsyncLoading.Api.Payments.csproj" -c Release -o /app/build

FROM build AS publish       
RUN dotnet publish "LayoutAsyncLoading.Api.Payments.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "/app/LayoutAsyncLoading.Api.Payments.dll", "--server.urls", "https://0.0.0.0:443"]