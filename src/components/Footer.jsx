function Footer({ color, changeColor }) {
  return (
    <div onClick={() => changeColor("blue")} style={{ color: color }}>
      Footer
    </div>
  );
}

export default Footer;
