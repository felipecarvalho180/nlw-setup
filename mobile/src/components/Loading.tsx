import React, { FC } from "react";
import { ActivityIndicator, View } from "react-native";

type Props = {};

const Loading: FC<Props> = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09090A",
      }}
    >
      <ActivityIndicator color="#7c3aed" size="large" />
    </View>
  );
};

export default Loading;
