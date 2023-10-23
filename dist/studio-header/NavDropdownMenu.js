import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton } from '@edx/paragon';
var NavDropdownMenu = function NavDropdownMenu(_ref) {
  var id = _ref.id,
    buttonTitle = _ref.buttonTitle,
    items = _ref.items;
  return /*#__PURE__*/React.createElement(DropdownButton, {
    id: id,
    title: buttonTitle,
    variant: "tertiary"
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement(Dropdown.Item, {
      href: item.href,
      className: "small"
    }, item.title);
  }));
};
NavDropdownMenu.propTypes = {
  id: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string
  })).isRequired
};
export default NavDropdownMenu;
//# sourceMappingURL=NavDropdownMenu.js.map