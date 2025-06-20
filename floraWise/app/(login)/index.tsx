import { ButtonComponent } from "@/components/ui/ButtonComponent";
import { InputComponent } from "@/components/ui/InputComponent";
import { TextComponent } from "@/components/ui/TextComponent";
import { ImageBackground, View } from "react-native";

export default function Login() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('@/assets/images/slide1.png')}
        style={{ width: '100%', height: 240, alignSelf: 'center' }}
      >
        <View style={{backgroundColor: 'rgba(0,0,0,0.2)', flex: 1}}/>
      </ImageBackground>
      <View style={{
        backgroundColor: 'white', 
        flex: 1, 
        borderTopLeftRadius: 24, 
        borderTopRightRadius: 24, 
        padding: 16,
        marginTop: -30,
      }}>
        <TextComponent
          color="black"
          fontFamily="medium"
          fontSize={22}
          textAlign="center"
          >
          Bem-vindo ao FloraWise
        </TextComponent>
        <TextComponent
          color="black"
          fontFamily="regular"
          fontSize={16}
          textAlign="center"
          style={{ marginTop: 16 }}
          >
          Cuide das suas plantas com inteligência. Aprenda a identificar e cuidar de qualquer planta, em segundos.
        </TextComponent>
        <InputComponent
          placeholder="Digite seu nome"
          setValue={(value) => console.log(value)}
          type="default"
          style={{marginTop: 16}}
        />
        <ButtonComponent
          color="green"
          handleButton={() => console.log('Login pressed')}
          text="Continuar"
          type="solid"
          style={{marginTop: 16}}
        />
      </View>
    </View>
  )
}

{/* <ParallaxScrollView
headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
headerImage={
  <ImageBackground
    source={require('@/assets/images/slide1.png')}
    style={{ width: '100%', height: 240, alignSelf: 'center' }}
  >
    <View style={{backgroundColor: 'rgba(0,0,0,0.2)', flex: 1}}/>
  </ImageBackground>
}>
<View style={{
  backgroundColor: 'white', 
  flex: 1, 
  borderTopLeftRadius: 24, 
  borderTopRightRadius: 24, 
  padding: 16,
  marginTop: -30,
}}>
  <TextComponent
  color="black"
  fontFamily="bold"
  fontSize={22}
  textAlign="center"
  >
    Bem-vindo ao FloraWise
  </TextComponent>
</View>
</ParallaxScrollView> */}