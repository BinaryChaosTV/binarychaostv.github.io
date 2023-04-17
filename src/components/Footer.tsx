import "../scss/modules/footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; Copyright {year}, Gabriel Montplaisir. All rights reserved.</p>
    </footer>
  );
}
