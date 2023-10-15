// TextAnimation.tsx
import { Component } from "react";
import "./styles/textanimation.css";

interface TextAnimationProps {
  prompts: string[];
}

interface TextAnimationState {
  prompts: string[];
  promptIndex: number;
  textIndex: number;
  isDeleting: boolean;
  currentText: string;
}

class TextAnimation extends Component<TextAnimationProps, TextAnimationState> {
  private typingSpeed: number = 150; // Adjust the typing speed (milliseconds)
  private eraseSpeed: number = 100; // Adjust the erasing speed (milliseconds)

  constructor(props: TextAnimationProps) {
    super(props);
    this.state = {
      prompts: props.prompts,
      promptIndex: 0,
      textIndex: 0,
      isDeleting: false,
      currentText: "",
    };
  }

  componentDidMount() {
    this.type();
  }

  type = () => {
    const { prompts, promptIndex, textIndex, isDeleting } = this.state;
    const currentPrompt = prompts[promptIndex];

    if (isDeleting) {
      this.setState({
        currentText: `Help me develop ${currentPrompt.substring(
          0,
          textIndex - 1
        )}`,
        textIndex: textIndex - 1,
      });

      setTimeout(() => {
        if (textIndex > 0) {
          this.type();
        } else {
          this.setState({
            isDeleting: false,
            promptIndex: (promptIndex + 1) % prompts.length,
          });
          setTimeout(this.type, this.eraseSpeed);
        }
      }, this.eraseSpeed);
    } else {
      this.setState({
        currentText: `Help me develop ${currentPrompt.substring(
          0,
          textIndex + 1
        )}`,
        textIndex: textIndex + 1,
      });

      setTimeout(() => {
        if (textIndex < currentPrompt.length) {
          this.type();
        } else {
          setTimeout(this.type, 5000); // Pause before typing the next prompt
          this.setState({
            isDeleting: true,
          });
        }
      }, this.typingSpeed);
    }
  };

  render() {
    const { currentText } = this.state;

    return (
      <div className="ideas">
        <span>{currentText}</span>
      </div>
    );
  }
}

export default TextAnimation;
