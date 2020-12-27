FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["LayoutAsyncLoading.Client.csproj", "LayoutAsyncLoading.Client/"]
RUN dotnet restore "LayoutAsyncLoading.Client/LayoutAsyncLoading.Client.csproj"

# install NodeJS 13.x
# see https://github.com/nodesource/distributions/blob/master/README.md#deb
RUN apt-get update -yq 
RUN apt-get install curl gnupg -yq 
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

WORKDIR /src
COPY ["/ClientApp/package.json", "LayoutAsyncLoading.Client/ClientApp/"]

WORKDIR /src/LayoutAsyncLoading.Client/ClientApp/
RUN npm install

WORKDIR "/src/LayoutAsyncLoading.Client"
COPY . .

RUN dotnet build "LayoutAsyncLoading.Client.csproj" -c Release -o /app/build

FROM build AS publish       
RUN dotnet publish "LayoutAsyncLoading.Client.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "/app/LayoutAsyncLoading.Client.dll", "--server.urls", "https://0.0.0.0:443"]