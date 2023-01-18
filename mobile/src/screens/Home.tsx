import React from "react";
import { ScrollView, Text, View } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateRangeBetweenDates } from "../utils/generate-range-between-dates";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateRangeBetweenDates();

const minimumSummaryDatesSize = 18 * 5;
const ammountToFill = minimumSummaryDatesSize - summaryDates.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16 ">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((day, index) => (
          <Text
            key={`${day + index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {day}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="flex-row flex-wrap">
          {summaryDates.map((date) => (
            <HabitDay key={date.toString()} />
          ))}

          {ammountToFill > 0 &&
            Array.from({ length: ammountToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              ></View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
