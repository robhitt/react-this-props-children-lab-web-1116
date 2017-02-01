const React = require('react')

class ThemedDecorations extends React.Component {
  render () {
    // {this.props.children}
    const childrenWithTheme = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return(

        <h1>
          { childrenWithTheme }
        </h1>
      

      // After this h1, you render out any children that are passed into the Invitation component. This allows us to customize the message.
    )
  }
}

module.exports = ThemedDecorations
