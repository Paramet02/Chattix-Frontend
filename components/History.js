import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
} from "react-native";
import React from "react";
import { Icon, Avatar, ListItem } from "@rneui/themed";

// Hardcoded data for HistoryBar
const HistoryBar = [
  {
    id: 1,
    img: require("../assets/picture/Nikke.jpg"),
    name: "Nikke Community",
    type: "Community",
  },
  {
    id: 2,
    img: require("../assets/picture/Nikke.jpg"),
    name: "Nikke Community",
    type: "Community",
  },
  {
    id: 3,
    img: require("../assets/picture/Nikke.jpg"),
    name: "Nikke Community",
    type: "Community",
  },
];

// check last index of HistoryBar
const lastindex = HistoryBar.length - 1;

const History = () => {
  return (
    <View style={styles.container}>
      {/* loop FlatList  */}
      <FlatList
        data={HistoryBar}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item , index }) => (
          <View>
            <TouchableOpacity>
              <ListItem>
                <Icon
                  name="rotate-cw"
                  type="feather"
                  size={24}
                  style={styles.icons}
                />
                <Avatar rounded size={40} source={item.img} />
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: "bold" }}>
                    {item.name}
                  </ListItem.Title>
                  <ListItem.Subtitle style={{ fontWeight: "bold" }}>
                    {item.type}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  // ListItem ใช้กับ width , height ไม่ได้

  container: {
    width : '100%',
    height : '18%',
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  icons: {
    paddingHorizontal: 10,
  },
});
