/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // Creating a new user
  pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_notes', 'old_notes', 'old_notes', 'old_notes')");

  // Change the owner value of the notes that Null
  pgm.sql("UPDATE notes SET owner = 'old_notes' WHERE owner = NULL");

  // Add a foreign key on owner
  pgm.addConstraint('notes', 'fk_notes.owner_user.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // Delete the constraint
  pgm.dropConstraint('notes', 'fk_notes.owner_users.id');

  // Change the owner to NULL
  pgm.sql("UPDATE notes SET owner = NULL WHERE owner = 'old_notes'");

  // Delete a new user
  pgm.sql("DELETE FROM users WHERE id = 'old_notes'");
};
