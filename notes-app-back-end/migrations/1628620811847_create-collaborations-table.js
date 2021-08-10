/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // Creating collaborations table
  pgm.createTable('collaborations', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    note_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  // Creating UNIQUE constraint
  pgm.addConstraint('collaborations', 'unique_note_id_and_user_id', 'UNIQUE(note_id, user_id)');

  // Add the foreign key
  pgm.addConstraint('collaborations', 'fk_collaborations.note_id_notes.id', 'FOREIGN KEY(note_id_ REFERENCES notes(id) ON DELETE CASCADE');
  pgm.addConstraint('collaborations', 'fk_collaborations.user_id_users.id', 'FOREIGN KEY(user_id_ REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // Delete collaborations table
  pgm.dropTable('collaborations');
};
