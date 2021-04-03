import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { BottomTabIconComponent } from "./bottom-tab.icon.component";
import { DiscoverScreen } from "../../screens/discover/discover.screen";
import { FinishedBooksScreen } from "../../screens/finished-books/finished-books.screen";
import { HomeScreen } from "../../screens/home/home.screen";
import React from "react";
import { ReadingListScreen } from "../../screens/reading-list/reading-list.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**
 * Color is inherited from the tab bar options
 */
const getTabOptions = (icon, iconFocussed) => {
  return {
    tabBarIcon: ({ focused }) => (
      <BottomTabIconComponent focused={focused}>
        {focused ? iconFocussed : icon}
      </BottomTabIconComponent>
    ),
  };
};

/**
 * tabProperties:
 * https://reactnavigation.org/docs/bottom-tab-navigator/#options
 *
 */
const getTabItemsConfigs = (defaultIconColor, focusedIconColor) => [
  /** Reading List */
  {
    tabProperties: {
      name: "ReadingListScreen",
      component: ReadingListScreen,
    },
    icon: (
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={32}
        color={defaultIconColor}
      />
    ),
    iconFocussed: (
      <MaterialCommunityIcons
        name="book-open-page-variant"
        size={32}
        color={focusedIconColor}
      />
    ),
  },
  /** Discover */
  {
    tabProperties: {
      name: "DiscoverScreen",
      component: DiscoverScreen,
    },
    icon: (
      <MaterialCommunityIcons
        name="book-search"
        size={32}
        color={defaultIconColor}
      />
    ),
    iconFocussed: (
      <MaterialCommunityIcons
        name="book-search"
        size={32}
        color={focusedIconColor}
      />
    ),
  },
  /** Finished Books */
  {
    tabProperties: {
      name: "FinishedBooksScreen",
      component: FinishedBooksScreen,
    },
    icon: (
      <MaterialCommunityIcons
        name="bookmark-check"
        size={32}
        color={defaultIconColor}
      />
    ),
    iconFocussed: (
      <MaterialCommunityIcons
        name="bookmark-check"
        size={32}
        color={focusedIconColor}
      />
    ),
  },
];

const Tab = createBottomTabNavigator();

export const HomeBottomTabsNavigator = () => {
  const defaultIconColor = "green";
  const focusedIconColor = "red";

  const tabItemsConfigs = getTabItemsConfigs(
    defaultIconColor,
    focusedIconColor
  );
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: defaultIconColor,
        activeTintColor: focusedIconColor,
      }}
    >
      {tabItemsConfigs.map((tabItemConfig) => {
        const { tabProperties, icon, iconFocussed } = tabItemConfig;
        return (
          <Tab.Screen
            key={tabProperties.name}
            {...tabProperties}
            options={getTabOptions(icon, iconFocussed)}
          />
        );
      })}
    </Tab.Navigator>
  );
};
