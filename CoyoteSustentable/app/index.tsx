import { Text, View, StyleSheet, ScrollView, Pressable,} from "react-native";
import PieChart from 'react-native-pie-chart'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import QRCode from "react-native-qrcode-svg";
import { useCameraPermissions } from "expo-camera";
import { Link, Stack } from "expo-router";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

export default function Index() {
  
    const [permision, requestPermision] =  useCameraPermissions()

    const series = [
      { value: 100, color: 'pink', label:{text:"PRUEBA 1", fontWeight: 'bold'}},
      { value: 321, color: '#ffb300' },
      { value: 185, color: '#ff9100' },
      { value: 123, color: '#ff6c00' },
    ]

    const widthAndHeight = 250

    const isPremissionGranted = Boolean(permision?.granted)
      
    
  
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
        <ScrollView style={
              {display: "flex",
              }}
              >
          <View
            style={
              {display: "flex",
              alignItems: 'center',
              height: "auto",
              backgroundColor: "pink"}}
              
          >
            <Text>Edit app/index.tsx to edit this screen.</Text>
            </View>

            <View>
              <Pressable onPress={requestPermision}>
                <Text>REQUEST PERMISSIONS</Text>
              </Pressable>

              <Link href={"/scanner"} asChild>
                <Pressable disabled={!isPremissionGranted}>
                  <Text
                  style={{opacity: !isPremissionGranted ? 0.5 : 1, backgroundColor: "gray"}}>Go to camera yay</Text>
                </Pressable>
              </Link>
            </View>
          
            <View>
              <QRCode value="https://reactnative.dev/docs/view"
              logo={require ("../shared/logoSus1.png")}
              size={300}
              logoSize={80}/>
            </View>
      

        
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.container}>
                <Text style={styles.title}>Basic</Text>
                <PieChart widthAndHeight={widthAndHeight} series={series}/>

                <Text style={styles.title}>Doughnut</Text>
                <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.45} />

                <Text style={styles.title}>Basic</Text>
                <PieChart widthAndHeight={widthAndHeight} series={series}/>

                <Text style={styles.title}>Doughnut</Text>
                <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.45} />
              </View>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    width: "100%",
    backgroundColor: "yellow"
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
})