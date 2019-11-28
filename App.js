import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { BTN_COLOR } from "./colors/colors";
import { koreaFood, italyFood } from "./model/foods";
import { FontAwesome } from "@expo/vector-icons";

//자동완성 > 직접타이핑 > 복붙

//Dimensions안에서 width, height를 추출해야 한다.
const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  //제이슨 방식으로 인식
  //state안에 있는 데이터가 변경이 되면, 변경을 감지하여 화면을 리로드 한다. ≒ Ajax
  state = { korea: false, italy: false, mexico: false };

  //class안에서 여러가지 function을 사용할 수 있음
  //return은 하나의 Component만 리턴할 수 있다.
  //Component 두개를 하나로 묶어주는 기능 : Fragment
  //state 안에 있는 코리아가 true 면? 뭔가를 출력하고 : 아니면 아무것도 안함
  //어딘가 안에 있는 내용을 가져올 때에는 const {}사용하기

  render() {
    const { korea, italy, mexico } = this.state;

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch} onPress={this._btnHandleKorea}>
            <FontAwesome name="user-circle-o" />
            <Text style={styles.btnTxt}>KOREA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch} onPress={this._btnHandleItaly}>
            <FontAwesome name="user-circle-o" />
            <Text style={styles.btnTxt}>ITALY</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={this._btnHandleMexico}
          >
            <FontAwesome name="user-circle-o" />
            <Text style={styles.btnTxt}>MEXICO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          {korea
            ? koreaFood.map(food => (
                <Text key={food.id}>
                  {food.name}|{food.price}
                </Text>
              ))
            : null}
          {italy
            ? italyFood.map(food => (
                <Text key={food.id}>
                  {food.name}|{food.price}
                </Text>
              ))
            : null}
        </View>
      </>
    );
  }

  //어로우 function =()=>
  //state의 값변경할때 setState를 사용
  _btnHandleKorea = () => {
    this.setState({
      korea: true,
      italy: false
    });
  };
  _btnHandleItaly = () => {
    this.setState({
      korea: false,
      italy: true
    });
  };
  _btnHandleMexico = () => {
    alert("Have Not Food List.... Sorry ㅠㅠ");
    this.setState({
      korea: false,
      italy: false
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTxt: {},
  touch: {
    backgroundColor: BTN_COLOR,
    width: width / 2,
    height: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});
