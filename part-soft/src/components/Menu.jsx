import { Menu } from '@headlessui/react';

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button className="menu-one">More </Menu.Button>
      <Menu.Items className="menu-items">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`menu-item ${active ? 'active' : ''}`}
              href="/account-settings"
            >
              Referans
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`menu-item ${active ? 'active' : ''}`}
              href="/account-settings"
            >
              Müşteri Ziyaretleri
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`menu-item ${active ? 'active' : ''}`}
              href="/account-settings"
            >
              Bize Katıl
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;



/*import { Menu } from '@headlessui/react'

function MyDropdown() {
  return ( 
    <Menu>
      <Menu.Button className="menu-one">More</Menu.Button>
      <Menu.Items className="menu-items">
        <Menu.Item>
          {({ active }) => (
            <a
              className="menu-item"
              href="/account-settings"
            >
               Referans
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className="menu-item"
              href="/account-settings"
            >
               Müşteri Ziyaretleri
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className="menu-item"
              href="/account-settings"
            >
             Bize Katıl
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default MyDropdown */