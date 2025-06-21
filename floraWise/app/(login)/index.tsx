import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ButtonComponent } from "@/components/ui/ButtonComponent";
import { InputComponent } from "@/components/ui/InputComponent";
import { TextComponent } from "@/components/ui/TextComponent";
import { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, ImageBackground, View } from "react-native";

const SLIDES = [
  require('@/assets/images/slide1.png'),
  require('@/assets/images/slide2.png'),
  require('@/assets/images/slide3.png'),
  require('@/assets/images/slide4.png'),
];

const { width } = Dimensions.get('window');

export default function Login() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const flatListRef = useRef<FlatList>(null);

  function handleButton() {
    if(name.length < 3) { 
      setError(true);
      return
    }
    console.log('Button pressed');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 1000 * 3);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <ImageBackground
      source={item}
      style={{ width, height: 250, alignSelf: 'center' }}
    >
      <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', flex: 1 }} />
    </ImageBackground>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#ffffff', dark: '#000000' }}
        headerImage={
          <FlatList
            ref={flatListRef}
            data={SLIDES}
            renderItem={renderItem}
            keyExtractor={(_, idx) => idx.toString()}
            scrollEnabled={false}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={e => {
              const index = Math.round(e.nativeEvent.contentOffset.x / width);
              setCurrentIndex(index);
            }}
          />
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
            setValue={(value) => {
              if(error) setError(false);
              setName(value);
            }}
            type="default"
            style={{marginTop: 16}}
            textError="Nome deve ter pelo menos 3 caracteres"
            showError={error}
          />
          <ButtonComponent
            color="green"
            handleButton={handleButton}
            text="Continuar"
            type="solid"
          />
        </View>
      </ParallaxScrollView>
    </View>
  )
}