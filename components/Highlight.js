import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
} from "react-native";
import React from "react";
import { ListItem, Image } from "@rneui/themed";

const HighlightData = [
  {
    id: 1,
    title: "อาจารย์สุดหล่อแจก เกรด A นักศึกษาเฮลั่น",
    subtitle: "อาจารยจากมหาลัยเอกชนอันดับ 1 แจกเกรด A",
    image: require("../assets/picture/student.jpg"),
  },
  {
    id: 2,
    title: "อาจารย์สุดหล่อแจก เกรด A นักศึกษาเฮลั่น",
    subtitle: "อาจารยจากมหาลัยเอกชนอันดับ 1 แจกเกรด A",
    image: require("../assets/picture/student.jpg"),
  },
  {
    id: 3,
    title: "อาจารย์สุดหล่อแจก เกรด A นักศึกษาเฮลั่น",
    subtitle: "อาจารยจากมหาลัยเอกชนอันดับ 1 แจกเกรด A",
    image: require("../assets/picture/student.jpg"),
  },
  {
    id: 4,
    title: "อาจารย์สุดหล่อแจก เกรด A นักศึกษาเฮลั่น",
    subtitle: "อาจารยจากมหาลัยเอกชนอันดับ 1 แจกเกรด A",
    image: require("../assets/picture/student.jpg"),
  },
  {
    id: 5,
    title: "อาจารย์สุดหล่อแจก เกรด A นักศึกษาเฮลั่น",
    subtitle: "อาจารยจากมหาลัยเอกชนอันดับ 1 แจกเกรด A",
    image: require("../assets/picture/student.jpg"),
  },
  {
    id: 6,
    title: "อาจารย์สุดหล่อแจก เกรด A นักศึกษาเฮลั่น",
    subtitle: "อาจารยจากมหาลัยเอกชนอันดับ 1 แจกเกรด A",
    image: require("../assets/picture/student.jpg"),
  },
];

const renderHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Highlight</Text>
  </View>
);

const Highlight = () => {
  return (
    <View style={styles.container}>
      <FlatList
        containerStyle={{ paddingVertical: 20 }} // เพิ่ม padding ด้านบน-ล่าง
        data={HighlightData}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader} // ✅ ใส่ Header ที่นี่
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.title}
                </ListItem.Title>
                <ListItem.Subtitle style={{ fontSize: 16 }}>
                  {item.subtitle}
                </ListItem.Subtitle>
              </ListItem.Content>
              <Image source={item.image} style={styles.image} />
            </ListItem>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // เพิ่ม padding ด้านล่าง
        style={{ flex: 1 }} // เพิ่ม flex: 1 เพื่อให้ FlatList สามารถใช้พื้นที่ได้เต็มที่
      />
    </View>
  );
};

export default Highlight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 99,
    height: 70,
    borderRadius: 10,
  },
});
