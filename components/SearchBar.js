import { StyleSheet, View, TouchableOpacity  } from "react-native";
import { Icon, Input } from "@rneui/themed";

import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <TouchableOpacity
          onPress={() => {
            // Handle search button press
            console.log("Arrow button clicked");
          }}
          activeOpacity={0.7} // ลดความทึบของปุ่มเมื่อกด
        >
          <Icon name="chevron-left" type="Octicons" color="#000" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchbar}>
        <Input
          placeholder="ค้นหา"
          containerStyle={{ backgroundColor: "#f0f0f0", borderRadius: 28 }} // ตกแต่งสีพื้นหลัง
          inputContainerStyle={{ borderBottomWidth: 0 }} // เอาเส้นขอบล่างออก
          inputStyle={{ color: "black", fontSize: 16, paddingTop: 5 }}
          rightIcon={
            <TouchableOpacity
              onPress={() => {
                // Handle search button press
                console.log("Search button clicked");
              }}
              activeOpacity={0.7} // ลดความทึบของปุ่มเมื่อกด
            >
              <Icon name="search" type="Octicons" size={22} />
            </TouchableOpacity>
          } // ตกแต่งไอคอน
          rightIconContainerStyle={{ paddingBottom: 5 }} // ขยับไอคอนไปทางขวา
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  arrow: {
    paddingRight: 10,
  },
  searchbar: {
    width: "80%",
    height: "60%",
    flexDirection: "row",
  },
});
