import Image from "next/image";
import clsx from "clsx";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import client from "../../apolloClient";

export const Images = Image;
export const conditionalClass = clsx;
export const ApolloClients = ApolloClient;
export const InMemoryCaches = InMemoryCache;
export const gqls = gql;
export const clients = client;
