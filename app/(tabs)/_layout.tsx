import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import Home from "@/assets/icon/home.svg";
import Library from "@/assets/icon/library.svg";
import Bookstore from "@/assets/icon/bookstore.svg";
import Search from "@/assets/icon/search.svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary.tabIconSelected,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home color={focused ? Colors.primary.tabIconSelected : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, focused }) => (
            <Library color={focused ? Colors.primary.tabIconSelected : color} />
          ),
        }}
      />

      <Tabs.Screen
        name="bookstore"
        options={{
          title: "Bookstore",
          tabBarIcon: ({ color, focused }) => (
            <Bookstore
              color={focused ? Colors.primary.tabIconSelected : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Search color={focused ? Colors.primary.tabIconSelected : color} />
          ),
        }}
      />
    </Tabs>
  );
}
